import { toKebabCase } from "../../utils/string"

interface TagCardProps {
  title: string
  text: string
}

export const TagCard: React.VFC<TagCardProps> = ({ title, text }) => {
  return (
    <div className="xl:w-1/2 w-full p-2" id={`tag-${toKebabCase(title)}`}>
      <div className="bg-gray-100 p-4 rounded">
        <div className="flex flex-nowrap items-center">
          <div className="hidden sm:block">
            <div className="w-24 h-24 flex justify-center items-center bg-gray-400">
              <div className="text-2xl">Icon</div>
            </div>
          </div>
          <div className="sm:ml-4">
            <h4 className="text-2xl">
              {title}
            </h4>
            <p className="mb-2 xl:h-18">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
