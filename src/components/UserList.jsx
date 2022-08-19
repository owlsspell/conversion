import { useState } from 'react';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getUserList } from '../api/api';
import Image from 'react-bootstrap/Image'
import LetteredAvatar from 'react-lettered-avatar';
import logs from "../logs.json"
import Diagram from './Diagram';
import NexButton from './NexButton';
import defaultImg from "../images/apple.webp"

export default function UserList() {

  const [users, setUsers] = useState([])
  const [offset, setOffset] = useState("itrE0aiV8CObkdQ7j/rec8BM8YxS0lQ23yO")
  useEffect(() => {
    getUserList().then(res => {
      setUsers(res.records);
    })
  }, [])
  
  return (<>
    <Row xs={1} md={2} lg={3} className="g-4">
      {users.map((user) => {
        const { Id, Name, avatar, occupation } = user.fields;
        let impression = logs.filter(item => item.user_id === Id && item.type === "impression")
        let conversion = logs.filter(item => item.user_id === Id && item.type === "conversion")
        let sumConversion = conversion.reduce(
          (previousValue, currentValue) => previousValue + currentValue.revenue,
          0
        );

        return (
          <Col key={Id}>
            <Card
              text='dark'
              className="userCard"
            >
              <div className="d-flex flex-wrap">
                <div className="d-flex col-12">
                  <div className="col-4">
                    {avatar ? <Image variant="left" src={defaultImg}
                      roundedCircle="true" className="userAvatar" />
                      : <div className="avatarDefault">
                        <LetteredAvatar
                          size={100}
                          radius={50}
                          name={Name.slice(0, 1)}
                        /></div>}
                  </div>
                  <Card.Body className="col-8 d-flex flex-column justify-content-center align-items-start">
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>
                      {occupation}
                    </Card.Text>
                  </Card.Body>
                </div>

                <Diagram conversion={conversion} />
                <Card.Body>
                  <div className="info">
                    <div className="impression">
                      {impression.length}
                      <p>impression</p>
                    </div>
                    <div className="conversion">
                      {conversion.length}
                      <p>conversion</p>
                    </div>
                    <div className="resultSum">
                      ${sumConversion.toFixed(0)}
                    </div>
                  </div>
                </Card.Body>

              </div>
            </Card>
            <br />
          </Col>
        )
      })}

    </Row>
    <NexButton offset={offset} setOffset={setOffset} setUsers={setUsers} />
  </>
  );
}