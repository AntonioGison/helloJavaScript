
export default function Login() {
    const [formState, setFormState] = useState({});
    const handleChange = ({ target }) => {
    
        //if it was an array [ name, value ] instead of {}
      const { name, value } = target;
        //we use prev with the dot notation because everytime we call the settle it overwrite the previous value
        //in this way we rewrite but we save the previous value
      setFormState((prev) => ({
        ...prev,
        // dynamic property, this means [name] can be anything, it can be firstName or password in our case
        [name]: value
      }));
    };
   
    return (
      <form>
        <input
          value={formState.firstName}
          onChange={handleChange}
          name="firstName"
          type="text"
        />
        <input
          value={formState.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
      </form>
    );
  }