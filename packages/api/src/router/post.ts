import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { EventEmitter } from 'events';
import { observable } from '@trpc/server/observable';

const ee = new EventEmitter();

export interface Post {
  id: number;
  title: string;
  status: 'draft' | 'published';
}

const POSTS = [{
  id: 1,
  title: 'Hello World',
  status: 'draft'
}];

export const postRouter = createTRPCRouter({
  all: publicProcedure.query(() => {
    return POSTS;
  }),
  byId: publicProcedure.input(z.object({
    id: z.number()
  })).query(({ input }) => {
    return POSTS.find((post) => post.id === input.id);
  }),
  add: publicProcedure.input(z.object({
    title: z.string().min(1)
  })).mutation(({ input }) => {
    const newPost = {
      id: POSTS.length + 1,
      title: input.title,
      status: 'draft'
    };
    POSTS.push(newPost);
    console.log("Received post");
    ee.emit('add', newPost);
    return newPost;
  }),
  onAdd: publicProcedure.subscription(() => {
    return observable<void>((emit) => {
      const onAdd = (post: Post) => {
        emit.next();
      };

      ee.on('add', onAdd);

      return () => {
        ee.off('add', onAdd);
      };
    });

  })
})