import { IPost } from '../../../../types/post.interface';

export const initialPosts: IPost[] = [
  {
    _id: '1',
    user: {
      _id: '3',
      avatar: 'https://sasquatchchronicles.com/wp-content/uploads/2019/08/national-geographic.png',
      name: 'National Geographic',
    },
    content: 'Hi',
    createdAt: '15 min later',
    image: 'https://i.natgeofe.com/n/092d7b43-e790-4ba1-9055-a317ae3baefa/18635.jpg?w=636&h=477',
  },
];
