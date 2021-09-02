import Link from 'next/link'
import { Tags } from "../../assets/tags"
import { Work } from "../../interfaces/work"
import { toKebabCase } from "../../utils/string"

interface WorkCardProps {
  work: Work
}

export const WorkCard: React.VFC<WorkCardProps> = ({ work: { name, id, text, tags, links } }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 w-full p-2 flex" id={`woek-${id ?? toKebabCase(name)}`}>
      <div className="bg-gray-100 p-4 rounded flex-grow">
        <div>
          <img src={"https://placehold.jp/400x300.png?text=No%20Image"} alt="" className="max-w-full h-48 m-auto" />
        </div>
        {/* text-3xl text-2xl */}
        <h4 className="py-2 text-3xl">
          <span className={`text-${name.length < 20 ? 3 : 2}xl`}>{name}</span>

          {links.map(({ link, icon }, i) => (
            <a href={link} className="text-blue-700" target="_blank" rel="noopener noreferrer" key={i}>
              <i className={`tech-icon-${toKebabCase({ Site: "OpenInNew" }[icon] ?? icon)} align-middle ml-1 -mt-1`} />
            </a>
          ))}
        </h4>
        <p className="pb-2">
          {text}
        </p>
        <div className="flex flex-wrap">
          {tags.map((tag, i2) => Tags.map(t => t.name).includes(tag) ? (
            <span key={i2} className="px-2 py-0.5 mr-1 mb-1 text-gray-800 bg-gray-200 rounded underline">
              <Link href={`#tag-${toKebabCase(tag)}`}>{`#${tag}`}</Link>
            </span>
          ) : (
            <span key={i2} className="px-2 py-0.5 mr-1 mb-1 text-gray-800 bg-gray-200 rounded">
              {`#${tag}`}
            </span>
          ))}
        </div>
      </div>
    </div >
  )
}
