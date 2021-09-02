const Page = () => {
  return (
    <div style={{ minWidth: "400px" }}>
      <main>
        <section className="max-w-6xl py-4 mx-auto">
          <div className="flex flex-nowrap justify-center text-center md:text-left">
            <div className="pr-4 hidden md:block">
              <div className="w-2 h-full bg-green-500 rounded"></div>
            </div>
            <div>
              <h1
                className="text-4xl md:text-6xl text-green-500 my-2"
                style={{ fontFamily: "ヒラギノ丸ゴ ProN" }}
              >
                Tomoharu Watanabe
              </h1>
              <h2
                className="text-xl md:text-2xl"
              >
                About...
              </h2>
            </div>
          </div>
        </section>
        <section className="max-w-6xl p-2 mx-auto">
          <div className="flex">
            <div>
              <h1 className="text-4xl">Works</h1>
              <div className="w-full h-1 bg-green-500 rounded"></div>
            </div>
          </div>
          <div className="flex justify-center items-center h-80">
            <div className="text-3xl">Cards</div>
          </div>
        </section>
        <section className="max-w-6xl p-2 mx-auto">
          <div className="flex">
            <div>
              <h1 className="text-3xl md:text-4xl">Languages & Frameworks</h1>
              <div className="w-full h-1 bg-green-500 rounded"></div>
            </div>
          </div>
          <div className="flex justify-center items-center h-80">
            <div className="text-3xl">Cards</div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page