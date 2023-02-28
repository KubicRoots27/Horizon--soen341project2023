//import 'src/styles/global.css'

const JobPosted = () => (
   <div class="flex min-h-screen w-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5">
    <div class="mx-auto max-w-md">
      <p class="text-center text-4xl">TITLE OF POST HERE</p>
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <div class="w-full max-w-xl">
            <form class="mb-4 rounded bg-white px-8 pt-6 pb-8">
              <div class="mb-4">
                <label class="mb-2 block w-96 text-sm font-bold text-gray-700" for="jcompany"> Company </label>
                <a href="#" class="font-medium text-blue-600 underline hover:text-blue-700 hover:no-underline dark:text-blue-500 dark:hover:text-blue-600">Company name and link to the profile</a>
              </div>
              <div class="mb-6">
                <label class="mb-2 block text-sm font-bold text-gray-700" for="jchar"> Job Characteristics </label>
                <p class="text-black-500 dark:text-black-400 font-light" id="jchar">The characteristics of the job will be printed right here</p>
              </div>
              <div class="mb-6">
                <label class="mb-2 block text-sm font-bold text-gray-700" for="jdescription"> Job Description </label>
                <p class="text-black-500 dark:text-black-400 font-light" id="jdescription">The Job description will be printed right here, so this will be a big amount of text detailing everything that the employer would like to search for in a candidate</p>
              </div>
              <div class="flex items-center justify-between">
                <button class="focus:shadow-outline rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700 focus:outline-none" type="button" id="goback">Go Back</button>
                <button class="focus:shadow-outline rounded border-2 border-solid border-sky-500 py-2 px-4 font-bold text-sky-500 hover:bg-sky-200 focus:outline-none" type="button" id="Save">Save</button>
                <button class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none" type="button" id="submit">Apply</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
  
export default JobPosted
