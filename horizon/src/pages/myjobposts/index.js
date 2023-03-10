import 'src/styles/globals.css'

const MyJobPosts = () => (
   <div id="myjobpostings">
  <div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex h-screen flex-col justify-between">
      <main class="mb-auto">
        <div class="divide-black-200 divide-y">
          <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 class="md:leading-14 text-black-900 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl">My Job Postings</h1>
          </div>
          <ul class="divide-black-200 divide-y">
            <li class="py-12">
              <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt class="sr-only">Published on</dt>
                    <dd class="text-base font-medium leading-6 text-gray-900">Date here</dd>
                  </dl>
                  <div class="space-y-5 xl:col-span-3">
                    <div class="space-y-6">
                      <div>
                        <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900" href="#" id="jpostposted">Job Post #5</a></h2>
                      </div>
                      <div class="prose text-black-200 max-w-none" id="jdescriptpost">Job Description shall appear hear</div>
                    </div>
                    <div class="text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600" href="#">Check job posting →</a></div>
                  </div>
                </div>
              </article>
            </li>
            <li class="py-12">
              <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt class="sr-only">Published on</dt>
                    <dd class="text-base font-medium leading-6 text-gray-900">Date here</dd>
                  </dl>
                  <div class="space-y-5 xl:col-span-3">
                    <div class="space-y-6">
                      <div>
                        <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900" href="#" id="jpostposted">Job Post #4</a></h2>
                      </div>
                      <div class="prose text-black-200 max-w-none" id="jdescriptpost">Job Description shall appear hear</div>
                    </div>
                    <div class="text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600" href="#">Check job posting →</a></div>
                  </div>
                </div>
              </article>
            </li>
            <li class="py-12">
              <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt class="sr-only">Published on</dt>
                    <dd class="text-base font-medium leading-6 text-gray-900">Date here</dd>
                  </dl>
                  <div class="space-y-5 xl:col-span-3">
                    <div class="space-y-6">
                      <div>
                        <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900" href="#" id="jpostposted">Job Post #3</a></h2>
                      </div>
                      <div class="prose text-black-200 max-w-none" id="jdescriptpost">Job Description shall appear hear</div>
                    </div>
                    <div class="text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600" href="#">Check job posting →</a></div>
                  </div>
                </div>
              </article>
            </li>
            <li class="py-12">
              <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt class="sr-only">Published on</dt>
                    <dd class="text-base font-medium leading-6 text-gray-900">Date here</dd>
                  </dl>
                  <div class="space-y-5 xl:col-span-3">
                    <div class="space-y-6">
                      <div>
                        <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900" href="#" id="jpostposted">Job Post #3</a></h2>
                      </div>
                      <div class="prose text-black-200 max-w-none" id="jdescriptpost">Job Description shall appear hear</div>
                    </div>
                    <div class="text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600" href="#">Check job posting →</a></div>
                  </div>
                </div>
              </article>
            </li>
            <li class="py-12">
              <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt class="sr-only">Published on</dt>
                    <dd class="text-base font-medium leading-6 text-gray-900">Date here</dd>
                  </dl>
                  <div class="space-y-5 xl:col-span-3">
                    <div class="space-y-6">
                      <div>
                        <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900" href="#" id="jpostposted">Job Post #2</a></h2>
                      </div>
                      <div class="prose text-black-200 max-w-none" id="jdescriptpost">Job Description shall appear hear</div>
                    </div>
                    <div class="text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600" href="#">Check job posting →</a></div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <div class="flex justify-end text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600" aria-label="all posts" href="#">All Posts →</a></div>
      </main>
      <footer>
        <div class="mt-16 flex flex-col items-center">
          <div class="mb-3 flex space-x-4"></div>
        </div>
      </footer>
    </div>
  </div>
</div>
  )
  
export default MyJobPosts
