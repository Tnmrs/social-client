import { useAuth } from '@/hooks/useAuth';
import { Alert, Card, Input } from 'antd';

const error = '';
import { FC, KeyboardEvent, useState } from 'react';

const AddPost: FC = () => {
  const [content, setContent] = useState('');
  const { user } = useAuth();

  const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Enter' && user) {
      setContent('');
    }
  };

  return (
    <>
      {error && <Alert message={error} type="error" showIcon />}
      <Card
        bodyStyle={{
          borderRadius: '10px',
        }}>
        <Input
          placeholder="Расскажи, что у тебя нового"
          style={{
            borderRadius: '25px',
          }}
          onKeyPress={addPostHandler}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </Card>
    </>
  );
};

export default AddPost;
