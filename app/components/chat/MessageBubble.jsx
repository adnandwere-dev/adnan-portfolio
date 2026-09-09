// export default function MessageBubble({ message }) {
//   const isUser = message.role === "user";

//   return (
//     <div className="max-w-full">
//       <div
//         className={`
//           px-4 py-3
//           rounded-2xl
//           text-sm
//           leading-7

//           max-w-[85vw]
//           sm:max-w-[70vw]
//           lg:max-w-[60vw]
//           xl:max-w-[50vw]

//           break-words
//           whitespace-pre-wrap

//           ${
//             isUser
//               ? `
//                 bg-primary-container
//                 text-on-primary-container
//                 rounded-tr-sm
//                 shadow-lg
//               `
//               : `
//                 glass-panel
//                 text-white/90
//                 rounded-tl-sm
//                 shadow-[0_20px_50px_rgba(0,0,0,0.3)]
//               `
//           }
//         `}
//       >
//         {message.content}

//         <div
//           className={`
//             mt-2
//             text-xs
//             opacity-70
//             flex
//             items-center
//             gap-2
//             ${isUser ? "justify-end" : "justify-start"}
//           `}
//         >
//           <span>{isUser ? "You" : "Adnan AI"}</span>
//           <span>{message.time}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
import ReactMarkdown from "react-markdown";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className="max-w-full overflow-hidden">
      <div
        className={`
          px-4 py-4
          rounded-2xl
          text-[15px]
          leading-8

          max-w-[320px]
          sm:max-w-[500px]
          md:max-w-[650px]
          lg:max-w-[750px]

          whitespace-pre-wrap
          break-words
          overflow-hidden

          transition-all

          ${
            isUser
              ? `
                bg-primary-container
                text-on-primary-container
                rounded-tr-sm
                shadow-lg
              `
              : `
                glass-panel
                text-white
                rounded-tl-sm
                shadow-[0_20px_50px_rgba(0,0,0,0.3)]
              `
          }
        `}
      >
        <ReactMarkdown
          components={{
            code({ children }) {
              return (
                <code className="bg-black/30 px-2 py-1 rounded text-green-400 text-sm">
                  {children}
                </code>
              );
            },

            h1({ children }) {
              return <h1 className="text-2xl font-bold mb-4">{children}</h1>;
            },

            h2({ children }) {
              return <h2 className="text-xl font-bold mb-3">{children}</h2>;
            },

            p({ children }) {
              return <p className="mb-2 leading-8">{children}</p>;
            },
          }}
        >
          {message.content}
        </ReactMarkdown>

        <div
          className={`mt-3 text-[11px] opacity-60 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {isUser ? "You" : "Adnan AI"} · {message.time}
        </div>
      </div>
    </div>
  );
}
