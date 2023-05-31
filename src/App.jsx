function App() {
  return (
    <>
      <div class="mx-auto max-w-6xl p-4 sm:p-6">
        <header class="border-b-2 border-slate-700 pb-2">
          <div class="hidden sm:block">
            <h1 class="text-xl font-bold md:text-3xl">
              JavaScript Algorithms and Data Structures
            </h1>
          </div>

          <div class="flex flex-row items-center justify-between sm:hidden">
            <h1 class="text-xl font-bold">Course</h1>
            <div class="flex flex-row items-center gap-2 text-lg">
              <a href="./test.html">
                <i class="bi bi-github"></i>
              </a>
              <a href="#">
                <i class="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>
        </header>

        <main class="flex flex-col gap-4 py-4 sm:gap-6 sm:py-6">
          <section class="section-template">
            <h2 class="section-heading">Variables</h2>

            <input
              type="text"
              id="variables-alert-input-box"
              class="input-field-underline"
              placeholder="Enter something..."
            />
            <button
              class="button-gray button mt-3"
              id="variables-alert-submit-button"
            >
              Submit
            </button>
          </section>

          <section class="section-template">
            <h2 class="section-heading">Assignments</h2>

            <p id="assignment-number">The number is equal to _</p>

            <div class="flex flex-col gap-2 pt-3">
              <div class="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <input
                  type="text"
                  id="assignments-first-num-input-box"
                  class="input-field-underline"
                  placeholder="Enter first number..."
                />
                <input
                  type="text"
                  id="assignments-second-num-input-box"
                  class="input-field-underline"
                  placeholder="Enter second number..."
                />
              </div>
              <div class="mt-3 flex flex-row flex-wrap items-center gap-1 sm:gap-2">
                <button
                  class="button-blue button"
                  id="assignments-addition-button"
                >
                  Add
                </button>
                <button
                  class="button-red button"
                  id="assignments-subtraction-button"
                >
                  Subtract
                </button>
                <button
                  class="button-green button"
                  id="assignments-multiplication-button"
                >
                  Multiply
                </button>
                <button
                  class="button-yellow button"
                  id="assignments-division-button"
                >
                  Divide
                </button>
                <button
                  class="button-gray button"
                  id="assignments-reset-button"
                >
                  Reset
                </button>
              </div>
            </div>
          </section>

          <section class="section-template">
            <h2 class="section-heading">string variables</h2>

            <div class="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                id="string-first-name-input"
                class="input-field-underline"
                placeholder="Enter first name..."
              />
              <input
                type="text"
                id="string-last-name-input"
                class="input-field-underline"
                placeholder="Enter last name..."
              />
            </div>
            <button class="button-gray button mt-3" id="string-submit-button">
              Submit
            </button>
          </section>

          <section class="section-template">
            <h2 class="section-heading">Constants</h2>

            <p class="fome" id="consts-paragraph"></p>
          </section>

          <section class="section-template">
            <h2 class="section-heading">Arrays</h2>

            <ul class="list" id="array-list">
              <p class="pb-2 font-medium">Here is my shopping cart list:</p>
            </ul>
            <p class="pt-2 font-medium">
              The total price is
              <span
                id="array-price-output"
                class="underline underline-offset-4"
              ></span>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
