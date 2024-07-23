const AboutMeText = () => {
  return (
    <div className="grid gap-y-3">
      <h1 className="text-2xl font-medium">
        Curious about me? Here you have it:
      </h1>
      <p className="aboutMetext-p">
        I'm a designer turned full stack developer, passionate about React.js
        and Node.js. I excel in blending technical and visual aspects to craft
        exceptional digital products, prioritizing user experience, precise
        design, and optimized code.
      </p>
      <p className="aboutMetext-p">
        Since starting my web development journey in 2015, I've embraced
        challenges and kept up with the latest tech trends. Now in my early
        thirties, seven years in, I'm building cutting-edge web apps using
        Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
      </p>
      <p className="aboutMetext-p">
        With a progressive mindset, I enjoy the entire product development
        process, from ideation to execution. Off duty, you'll find me on
        Twitter, tracking startup journeys, or unwinding. Follow me for tech
        insights and public project updates on Twitter or GitHub.
      </p>
      <p>Finally, some quick bits about me.</p>
      <div className="flex gap-x-7 ml-6">
        <ul style={{ listStyleType: "disc" }}>
          <li>Тасралтгүй суралцах чадвартай</li>
          <li>Үр дүн болон үр ашиг</li>
        </ul>
        <ul style={{ listStyleType: "disc" }}>
          <li>Хурдтай</li>
          <li>Чөлөөт сэтгэлгээтэй</li>
        </ul>
      </div>
      <p className="aboutMetext-p">
        One last thing, I'm available for freelance work, so feel free to reach
        out and say hello! I promise I don't bite 😉
      </p>
    </div>
  );
};
export default AboutMeText;
