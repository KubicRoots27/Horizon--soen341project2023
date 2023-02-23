import 'src/styles/globals.css'

const JobPostForm = () => (
    <div class="flex min-h-screen w-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5">
    <div class="mx-auto max-w-md">
      <p class="text-center text-4xl">Job Post</p>
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <div class="w-full max-w-xl">
            <form class="mb-4 rounded bg-white px-8 pt-6 pb-8">
              <div class="mb-4">
                <label class="mb-2 block w-96 text-sm font-bold text-gray-700" for="jtitle"> Job Title </label>
                <input class="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none" id="jtitle" type="text" placeholder="Enter job title" required />
              </div>
              <div class="mb-6">
                <label class="mb-2 block text-sm font-bold text-gray-700" for="jchar"> Job Characteristics </label>
                <textarea id="jchar" rows="4" class="focus:shadow-outline w-full resize-none appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none" type="text" placeholder="Enter job characteristics" required></textarea>
              </div>
              <div class="mb-6">
                <label class="mb-2 block text-sm font-bold text-gray-700" for="jdescription"> Job Description </label>
                <textarea id="jdescription" rows="6" class="focus:shadow-outline w-full resize appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none" type="text" placeholder="Enter job characteristics" required></textarea>
              </div>
              <div class="flex items-center justify-between">
                <button class="focus:shadow-outline rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700 focus:outline-none" type="button" id="cancel">Cancel</button>
                <button class="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none" type="button" id="submit">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
  
  export default JobPostForm
