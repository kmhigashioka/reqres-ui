import logo from './logo.svg';
import './App.css';
import { Table, TBody, Td, THead, Tr, Th, ScrollableTh } from '../../components/Table'

function App() {
  const users = [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}]

  return (
    <div className="App">
      {/* <Table>
        <THead>
          <Tr>
            <Th>ID</Th>
            <ScrollableTh>
              <Th>GIVEN NAME</Th>
              <Th>FAMILY NAME</Th>
              <Th>EMAIL</Th>
            </ScrollableTh>
          </Tr>
        </THead>
        <TBody>
          {users.map(u => (
            <Tr key={u.id}>
              <Td>{u.id}</Td>
              <Td>{u.first_name}</Td>
              <Td>{u.last_name}</Td>
              <Td>{u.email}</Td>
            </Tr>
          ))}
        </TBody>
      </Table> */}
      <div style={{ width: '250px', height: '150px', overflow: 'auto' }}>
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
          <div>
            <div className="sample">ID</div>
            {/* {users.map(u => <div key={u.id}>{u.id}</div>)} */}
          </div>
          <div style={{ overflowX: 'scroll', width: '100%', overflowY: 'hidden' }}>
            <div style={{ display: 'flex', flexShrink: 0 }}>
              <div className="sample">GIVEN NAME</div>
              <div className="sample">FAMILY NAME</div>
              <div className="sample">EMAIL</div>
            </div>
            <div style={{ overflowY: 'scroll' }}>
              {users.map(u => (
                <div key={u.id} style={{ display: 'flex' }}>
                  <div className="sample">{u.id}</div>
                  <div className="sample">{u.first_name}</div>
                  <div className="sample">{u.last_name}</div>
                  <div className="sample">{u.email}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
