import { Card, Image } from 'antd';
import { FC } from 'react';

import UserInfo from '@/components/ui/posts/UserInfo';

import { IPost } from '../../../../types/post.interface';

const PostItem: FC<{ post: IPost }> = ({ post }) => {
  return (
    <Card>
      <UserInfo post={post} />
      <p>{post.content}</p>
      <Image width={400} src={post.image} alt="" />
    </Card>
  );
};

export default PostItem;
