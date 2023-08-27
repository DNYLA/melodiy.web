'use client';

import useAuthModal from '@/hooks/modals/useAuthModal';
import * as Form from '@radix-ui/react-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Modal from './modal';

const LoginModal = () => {
  const router = useRouter();
  const { onClose, isOpen, isLogin } = useAuthModal();
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const { data: session } = useSession();

  useEffect(() => {
    // if (session) {
    //   router.refresh();
    //   onClose();
    // }
    // if (loggedIn) refershRouter; onClose();
    if (session?.user && isOpen) {
      onClose();
    }
  }, [router, onClose, session, isOpen]); //Add auth session

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
      // callbackUrl: '/',
    });
    if (res?.error === 'CredentialsSignin') {
      toast.error('Invalid Credentials Provided');
    } else {
      toast.success(`Welcome back`);
      // onClose();
    }
  };

  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen={isOpen && isLogin}
      onChange={onChange}
    >
      <Form.Root onSubmit={handleSubmit} className="">
        <Form.Field className="grid mb-[10px]" name="username">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Username
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              placeholder="Your Username"
              className="box-border w-full placeholder:font-extralight placeholder:text-neutral-500 placeholder:text-sm bg-neutral-700 outline-none shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white"
              type="username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="password">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Password
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter a question
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              placeholder="Your Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="box-border w-full placeholder:font-extralight placeholder:text-neutral-500 placeholder:text-sm bg-neutral-700 outline-none shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white"
              required
              type="password"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="box-border text-black w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Login
          </button>
        </Form.Submit>
      </Form.Root>
    </Modal>
  );
};

export default LoginModal;
