import Image from 'next/image';

const Home = (): JSX.Element => {
  return (
    <>
      <main>
        <Image src="/bg-mobile-light.jpg" alt="Background mobile" width={375} height={200} />

        <div className="border-red-300">
          <h1>to do</h1>

          <button>Dark demo</button>
        </div>

        <div>
          <form>
            <input type="text" value="create a new todo..." />
            <input type="submit" value="submit" />
          </form>
        </div>

        <div>
          <ul>
            <li>
              <div>
                <span>i</span>
                <p>Jog around the park 3x</p>
                <span>x</span>
              </div>
            </li>
          </ul>
          <div>
            <p>5 items left</p>
            <p>clear completed</p>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={80} height={25} />
        </a>
      </footer>
    </>
  );
};

export default Home;
