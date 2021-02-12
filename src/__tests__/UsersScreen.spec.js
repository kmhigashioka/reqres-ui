import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { UsersScreen } from '../containers/UsersScreen';

const apiURL = process.env.REACT_APP_API_URL;
const server = setupServer();
const usersPage1Result = {"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}};
const usersPage2Result = {"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}};

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

it('should able to fetch and display users', async () => {
  server.use(
    rest.get(`${apiURL}/api/users?page=1`, async (req, res, ctx) => {
      return res(ctx.json(usersPage1Result));
    }),
  )
  render(<UsersScreen />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

  expect(screen.getAllByRole('row')).toHaveLength(7);
});

it('should able to navigate between pages', async () => {
  server.use(
    rest.get(`${apiURL}/api/users?page=1`, async (req, res, ctx) => {
      return res(ctx.json(usersPage1Result));
    }),
  );
  render(<UsersScreen />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

  server.use(
    rest.get(`${apiURL}/api/users?page=2`, async (req, res, ctx) => {
      return res(ctx.json(usersPage2Result));
    }),
  );
  userEvent.click(screen.getByRole('button', { name: '2' }));
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

  expect(screen.getAllByRole('row')).toHaveLength(7);
  expect(screen.getByRole('row', { name: /12 Rachel Howell rachel.howell@reqres.in/i })).toBeInTheDocument();
});

xit('should display error message when encountered during fetch', async () => {
  server.use(
    rest.get(`${apiURL}/api/users?page=1`, async (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({
          message: 'Oh oh.',
        }),
      );
    }),
  );
  render(<UsersScreen />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

  expect(screen.getByRole('alert').textContent).toMatchSnapshot();
  screen.debug();
});

it('should display modal when a user is clicked', async () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  server.use(
    rest.get(`${apiURL}/api/users?page=1`, async (req, res, ctx) => {
      return res(ctx.json(usersPage1Result));
    }),
  )
  render(<UsersScreen />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

  userEvent.click(screen.getByRole('row', { name: /5 Charles Morris charles.morris@reqres.in/i }));
  const userDialog = screen.getByRole('dialog');
  expect(userDialog).toBeInTheDocument();
  expect(within(userDialog).getByText('5')).toBeInTheDocument();
  expect(within(userDialog).getByText('Charles')).toBeInTheDocument();
  expect(within(userDialog).getByText('Morris')).toBeInTheDocument();
  expect(within(userDialog).getByText('charles.morris@reqres.in')).toBeInTheDocument();
});
