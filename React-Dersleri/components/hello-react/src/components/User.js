// const User = (props) => {
//   return (
//     <h1>
//       {props.isLoggedIn
//         ? `${props.name} ${props.surname}`
//         : "Giriş yapmadınız..."}
//     </h1>
//   );
// };

// export default User;
import PropTypes from "prop-types";

function User({ fname, surname, isLoggedIn, age, friends, adress }) {
  if (!isLoggedIn) {
    return <h2>Giriş yapmadınız...</h2>;
  }
  return (
    <>
      <h1>
        {isLoggedIn
          ? `Benim Adım : ${fname} ve Soyadım : ${surname}, Yaşım : ${age}`
          : "Giriş yapmadınız..."}
      </h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>
          {friend.id} - {friend.fname}
        </h3>
      ))}
    </>
  );
}

User.propTypes = {
  fname: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoggedIn: PropTypes.bool,
  friends: PropTypes.array,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zipcode: PropTypes.number,
  }),
};

User.defaultProps = {
  isLoggedIn: false,
};
export default User;
