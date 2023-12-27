import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilters from '@/components/home/HomeFilters';
import NoResult from '@/components/shared/NoResult/NoResults';
import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import SelectFilters from '@/components/shared/select/SelectFilters';
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filters';
import React from 'react'


const questions = [
  {
    _id: 1,
    title: 'The Lightni ng Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this?',
    tags: [{_id: 1, name: 'nextjs'}, {_id: 2, name: 'reactjs'}],
    author: {
      _id: 4,
      name: 'John Doe',
      picture: 'john.png'
    },
    upvotes: 10000,
    views: 183903,
    answers: [],
    createdAt: new Date('2023-12-27T13:58:13.958Z')
  },
  {
    _id: 1,
    title: 'How to center a div?',
    tags: [{_id: 1, name: 'css'}, {_id: 2, name: 'html'}],
    author: {
      _id: 4,
      name: 'John Doe',
      picture: 'john.png'
    },
    upvotes: 9810,
    views: 988777,
    answers: [],
    createdAt: new Date('2023-12-26T19:12:07.453Z')
  }
]

const Home = () => {
  return (
    <>
      <div className='flex w-full flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:items-center' >
          <h1 className='h1-bold'>All Questions</h1>
          <Button className='primary-gradient min-h-[46px] px-4 py-3 text-light-900'>
            Ask a Question
          </Button>
      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchBar 
          route='/'
          iconPosition='left'
          imgSrc='/assets/icons/search.svg'
          placeholder='Search Questions...'
          otherClasses="flex-1"
        />

        <SelectFilters 
          filters={HomePageFilters}
          placeholder="Filters" 
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />

      </div>

      <HomeFilters />

    <div className="mt-10 flex flex-col gap-6">
      {
        questions.length ?
        questions.map(question => (
          <QuestionCard
            key={question._id}
            _id={question._id}
            title={question.title}
            views={question.views}
            answers={question.answers}
            upvotes={question.upvotes}
            author={question.author}
            tags={question.tags}
            createdAt={question.createdAt}
          />
        ))
        : 
        <NoResult 
          title='There&apos;s no question to show'
          description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
          link='/ask-question'
          linkTitle='Ask a Question'
        />
      }
    </div>

    </>
  )
}

export default Home