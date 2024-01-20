import Question from '@/components/forms/Question'
import { getUserByClerkId } from '@/lib/actions/user.action';
import { RedirectToSignIn } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation';
import React from 'react'


const AskQuestion = async () => {

  // const { userId } = clear();
  const userId = '12345';

  if(!userId) redirect('/sign-in');

  const mongoUser = await getUserByClerkId({ userId });
  console.log("mongoUser ", mongoUser);

  if(!mongoUser) {
    return <RedirectToSignIn />
    // return redirectToSignIn('/sign-in');
    // console.log("mongoUser ", mongoUser);    
  }

  return (
    <div>
      <h1 className='h1-bold text-dark100_light900'>Ask a question</h1>
      <div className='mt-9'>
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  )
}

export default AskQuestion