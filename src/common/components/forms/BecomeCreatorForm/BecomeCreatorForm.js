import styles from "./BecomeCreatorForm.module.css";

const BecomeCreatorForm = (props) => {
  const becomeCreator = (e) => {
    e.preventDefault();
    props.becomeCreator({ field: "creator", value: true });
  };

  return (
    <form onSubmit={becomeCreator} className={styles.BecomeCreatorForm}>
      <h3>Project Information</h3>
      <input type='text' placeholder='Project Title' required />
      <input type='text' placeholder='Project Genre' required />
      <textarea type='text' placeholder='Project Description' />

      <hr />
      <hr />

      <h3>Member Tier Information</h3>
      <p>Separate rewards with semicolons</p>
      <p>
        <i>ex. Meet with band ; Get exclusive sticker ; Get autographed card</i>
      </p>
      <input type='text' placeholder='Tier 1 rewards ($5)' required />
      <input type='text' placeholder='Tier 2 rewards ($10)' required />
      <input type='text' placeholder='Tier 3 rewards ($15)' required />

      <input
        type='submit'
        className={styles.createBtn}
        value={"Become a Creator"}
      ></input>
    </form>
  );
};

export default BecomeCreatorForm;
