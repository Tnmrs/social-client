import { Avatar } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IPost } from '../../../../types/post.interface';

const UserInfo: FC<{ post: IPost }> = ({ post }) => {
  return (
    <Link
      href={`/profile/${post.user._id}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#111',
        marginBottom: 12,
      }}>
      <a>
        <div
          style={{
            position: 'relative',
            marginRight: 2,
            width: 50,
            height: 50,
          }}>
          <Avatar size={46} src={post.user.avatar} />
        </div>
        <div>
          <div style={{ fontSize: 14 }}>{post.user.name}</div>
          <div style={{ fontSize: 14, opacity: '0.6' }}>{post.createdAt}</div>
        </div>
      </a>
    </Link>
  );
};

export default UserInfo;
