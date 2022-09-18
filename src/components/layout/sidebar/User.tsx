import { Avatar, Button, Card, Col, Row } from 'antd';
import { useAuth } from '@/hooks/useAuth';
import { users } from './dataUsers';
const User = () => {
  const { user } = useAuth();
  return (
    <Card
      style={{
        padding: 2,
        backgroundColor: '#F1F7FA',
        border: 'none',
        borderRadius: 3,
        marginBottom: 5,
      }}>
      <Row>
        <Col span={3}>
          <Avatar alt="" src={users[0].avatar} />
        </Col>

        <Col span={9}>
          <div>{users[0].name || 'noname'}</div>
        </Col>
      </Row>
      <Button type="dashed" onClick={() => {}}>
        Out
      </Button>
    </Card>
  );
};

export default User;
