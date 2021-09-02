import { Tags } from "../assets/tags"
import { Works } from "../assets/works"
import { TagCard } from "../components/TagCard"
import { WorkCard } from "../components/WorkCard"

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
                主にWebフロントを書いている、
                <br className="md:hidden" />
                プログラミング好きの人。
                <br />
                2004年生まれ、現在16歳。
                <br className="md:hidden" />
                N高等学校在籍、5期生（2年生）
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
          <div className="flex flex-wrap pt-4 justify-center md:justify-start">
            {Works.map((work, i) => (
              <WorkCard
                work={work}
                key={i}
              />
            ))}
          </div>
        </section>
        <section className="max-w-6xl p-2 mx-auto">
          <div className="flex">
            <div>
              <h1 className="text-3xl md:text-4xl">Languages & Frameworks</h1>
              <div className="w-full h-1 bg-green-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap pt-4 justify-center md:justify-start">
            {Tags.map((info, i) => (
              <TagCard
                title={info.name}
                text={info.text}
                key={i}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page