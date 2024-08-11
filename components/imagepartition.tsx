export const ImagePartion=()=>{
    const image="https://quotefancy.com/media/wallpaper/3840x2160/2090601-Charles-Handy-Quote-Change-is-only-another-word-for-growth-another.jpg"
      const image2="https://media.istockphoto.com/id/1155399377/photo/strategy-execution-success-concept.jpg?s=1024x1024&w=is&k=20&c=FeU0dmuCWWOImturRNPSFOGP-lGO6dM-YZs8vl4rUsc="
    const image3="https://media.licdn.com/dms/image/D5612AQH-YuISU5iv7Q/article-cover_image-shrink_720_1280/0/1675858149099?e=2147483647&v=beta&t=4RsaoVQpkmvUtZccQ12PH5jmiaWNXnJ0QAqR2fg3iJg"
      return(
        <div className="w-[vw] h-[100px] sm:h-[300px]">
      <div
        className="h-full  w-full bg-cover bg-center text-2xl "
        style={{
          backgroundImage: `url(${image3})`,
        }}
      ></div>
    </div>
    )
}
