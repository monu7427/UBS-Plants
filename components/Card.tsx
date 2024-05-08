import React from 'react';

const Card = (props: { imageUrl: string | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer" >
      <img className="w-full" src={props.imageUrl} />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1">{props.title}</div>
        <p className="text-gray-700 text-sm">{props.description}</p>
      </div>
      <div className="px-4 py-2">
 
        <p className="text-gray-700 text-sm">Price: inr <span className='font-bold'>{props.price}</span></p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
          Buy Now
        </button>
      </div>
      <h3>Manoj </h3>
    </div>
  );
};

export default Card;
