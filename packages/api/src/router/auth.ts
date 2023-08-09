import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  me: publicProcedure.query(({ ctx }) => {
    // getSession: publicProcedure.query(({ ctx }) => {

    // supabase
    return ctx.user;

    // next-auth
    // return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    // testing type validation of overridden next-auth Session in @askthem/auth package
    return "you can see this secret message!";
  }),
});
