import HomeFilters from '@/components/home/HomeFilters';
import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import SelectFilters from '@/components/shared/select/SelectFilters';
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filters';
import React from 'react'

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

    </>
  )
}

export default Home