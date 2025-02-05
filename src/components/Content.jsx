import React from 'react';

const Content = () => {
  return (
    <div
      className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 p-4 h-screen"
      style={{
        backgroundImage: "linear-gradient(to right, #F58529, #D18EFF, #D20D5B)",
      }}
    >
      <div className="flex items-center justify-center h-full bg-gradient-to-r from-[#0f172a] to-[#334155] bg-opacity-50">
        <div className="text-center text-white p-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Writing Blogs: A Creative Journey</h1>
          <p className="text-xl mb-4">
            Blogging is more than just writing—it’s a way to express yourself, share your thoughts,
            and connect with others who share your passions. Whether you're writing about personal
            experiences, technical insights, or creative endeavors, blogging allows you to share
            your voice with the world. Below are some tips to get started with blogging and make your
            writing journey a success. In addition to improving your writing skills, it’s a great way
            to create an online presence, reach a wide audience, and learn about various topics that
            interest you.
          </p>
          <p className="text-xl mb-4">
            One of the key aspects of blogging is consistency. Whether you post once a week or once a
            month, sticking to a schedule will keep your audience engaged and help you build a loyal
            readership. Also, don't forget to interact with your readers. Responding to comments, sharing
            your experiences, and encouraging discussions can help you grow your blog and create a sense of
            community. 
          </p>
          <p className="text-xl mb-4">
            Ultimately, blogging is a journey that helps you discover more about yourself, your passions, 
            and the world around you. So, pick up that pen (or keyboard) and start sharing your story—your 
            creative journey begins now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
