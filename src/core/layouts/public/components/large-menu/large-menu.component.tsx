// import css from './large-menu.module.scss';

// const LargeMenuComponent = ({data}:any) => {


//   return (
//     <div className={css.largeMenu}>
//       <div className={css.menuContainer}>
//         <div className="row">

//         </div>
//       </div>
//     </div>
//   );
// }

// export default LargeMenuComponent




// import css from './large-menu.module.scss';

// const LargeMenuComponent = ({ data }: any) => {
//   return (
//     <div className={css.largeMenu}>
//       <div className={css.menuContainer}>
//         {data.map((category: any) => (
//           <div key={category.id} className={css.categoryContainer}>
//             <h3 className={css.title}>{category.link}</h3>
//             {category.dropdown?.map((item: any) => (
//               <ul className={css.category} key={item.id}>
//                 <li
//                   className={css.dropdownItem}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <div className={css.dropdownPair}>
//                     <div className={css.dropdownIcon}>
//                       <img src={item.icon} alt="img" />
//                     </div>
//                     <div className={css.textDescription}>
//                       <p className={css.dropText}>{item.name}</p>
//                       <p className={css.dropDescription}>{item.description}</p>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LargeMenuComponent;




import css from './large-menu.module.scss';

const LargeMenuComponent = ({ data }: any) => {
  return (
    <div className={css.largeMenu}>
      <div className={css.menuContainer}>
        {data.map((category: any, index: number) => (
          <div key={category.id} className={css.column}>
            <h3>{category.link}</h3>
            <ul className={css.category}>
              {category.dropdown?.map((item: any) => (
                <li key={item.id} className={css.dropdownItem}>
                  <div className={css.dropdownPair}>
                    <div className={css.dropdownIcon}>
                      <img src={item.icon} alt="icon" />
                    </div>
                    <div className={css.textDescription}>
                      <p className={css.dropText}>{item.name}</p>
                      <p className={css.dropDescription}>{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LargeMenuComponent;





