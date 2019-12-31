import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProcedures, faBed, faUserMd, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { Card,CardContent,CardWrapper,CardIcon,CardCount,CardSubText,CardTextContent } from './styled'

const DashboardCard = ({ history }) => {
  return (
    <CardWrapper>
      <Card>
        <CardContent >
          <CardIcon type='patients'>
            <FontAwesomeIcon icon={faProcedures} />
          </CardIcon>
          <CardTextContent>
            <CardCount>
              1000
            </CardCount>
            <CardSubText>
              Patients
            </CardSubText>
          </CardTextContent>
        </CardContent>
      </Card>
      <Card>
        <CardContent >
          <CardIcon type='doctors'>
            <FontAwesomeIcon icon={faUserMd} />
          </CardIcon>
          <CardTextContent>
            <CardCount>
              100
            </CardCount>
            <CardSubText>
              Doctors
            </CardSubText>
          </CardTextContent>
        </CardContent>
      </Card>
      <Card>
        <CardContent >
          <CardIcon type='employees' >
            <FontAwesomeIcon icon={faUserFriends} />
          </CardIcon>
          <CardTextContent>
            <CardCount>
              200
            </CardCount>
            <CardSubText>
              Employees
            </CardSubText>
          </CardTextContent>
        </CardContent>
      </Card>
      <Card>
        <CardContent >
          <CardIcon type='beds'>
            <FontAwesomeIcon icon={faBed} />
          </CardIcon>
          <CardTextContent>
            <CardCount>
              1000
            </CardCount>
            <CardSubText>
              Beds
            </CardSubText>
          </CardTextContent>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default DashboardCard;
