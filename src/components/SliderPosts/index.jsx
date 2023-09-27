import React from 'react';

export const SliderPost = () => {
    // Datos de ejemplo para las publicaciones
    const posts = [
      { id: 1, title: 'Publicación 1', image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=801' },
      { id: 2, title: 'Publicación 2', image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      { id: 3, title: 'Publicación 3', image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      { id: 4, title: 'Publicación 4', image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      { id: 5, title: 'Publicación 5', image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      { id: 6, title: 'Publicación 6', image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      
   
    ];
  
    return (
      <>
          <h2 >All blog post</h2>
      <div className="py-12 md:px-16 sm:px-14 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-2">
              <div className="">
                <img
                  src={post.image}
                  alt={post.title}
                  className="mx-auto object-cover "
                />
                <p>20-11-2023</p>
                <h2 className="text-lg mt-2">{post.title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iure facilis, odit adipisci vel molestiae? Possimus molestias excepturi veritatis voluptatibus!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };

