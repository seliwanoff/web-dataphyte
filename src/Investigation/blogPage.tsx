import React from "react";

interface BlogProps {
  title?: string;
  date: string;
  authorName: string;
  authorProfilePic: string;
  thumbnail: string;
  content: string;
}

const BlogPage: React.FC<BlogProps> = ({
  title,
  date,
  authorName,
  authorProfilePic,
  thumbnail,
  content,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 font-polySans">
          {title}
        </h1>
        <div className="flex items-center mt-4 space-x-4">
          <img
            src={authorProfilePic}
            alt={`${authorName}'s profile`}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800 font-Inter">
              {authorName}
            </p>
            <p className="text-sm text-gray-500 font-Satoshi">{date}</p>
          </div>
        </div>
      </header>

      <div className="mb-8">
        <img
          src={thumbnail}
          alt="Blog Thumbnail"
          className="w-full h-64 lg:h-96 object-cover rounded-md"
        />
      </div>

      <article className="prose lg:prose-xl max-w-none text-gray-700 leading-7 font-Poppins">
        {content}
      </article>
    </div>
  );
};

export default BlogPage;
