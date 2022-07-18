// Import CSS
import styles from "./BecomeCreatorForm.module.css";

const BecomeCreatorForm = (props) => {
  const becomeCreator = (e) => {
    e.preventDefault();

    props.becomeCreator({
      field: "creator",
      value: {
        title: document.querySelector("#title").value,
        genre: document.querySelector("#genre").value.toUpperCase(),
        desc: document.querySelector("#desc").value,
        tier1: document
          .querySelector("#tier1")
          .value.split(";")
          .map((reward) => reward.trim())
          .filter((el) => el !== ""),
        tier2: document
          .querySelector("#tier2")
          .value.split(";")
          .map((reward) => reward.trim())
          .filter((el) => el !== ""),
        tier3: document
          .querySelector("#tier3")
          .value.split(";")
          .map((reward) => reward.trim())
          .filter((el) => el !== "")
      }
    });
  };

  const selectElClass = (e) => {
    e.target.classList = [];
  };

  return (
    <form onSubmit={becomeCreator} className={styles.BecomeCreatorForm}>
      <h3>Project Information</h3>
      <input id='title' type='text' placeholder='Project Title' required />

      {/* <input id='genre' type='text' placeholder='Project Genre' required /> */}
      <select
        onChange={selectElClass}
        className={styles.placeholder}
        name='genre'
        id='genre'
        defaultValue={"default"}
        required
      >
        <option value={"default"} disabled hidden>
          Genre
        </option>
        <option value='music'>Music</option>
        <option value='podcast'>Podcast</option>
        <option value='film'>Film</option>
        <option value='writing'>Writing</option>
      </select>
      <textarea id='desc' type='text' placeholder='Project Description' />

      <hr />
      <hr />

      <h3>Member Tier Information</h3>
      <p>Separate rewards with semicolons</p>
      <p>
        <i>ex. Meet with band ; Get exclusive sticker ; Get autographed card</i>
      </p>
      <input
        id='tier1'
        type='text'
        placeholder='Tier 1 rewards ($5)'
        required
      />
      <input
        id='tier2'
        type='text'
        placeholder='Tier 2 rewards ($10)'
        required
      />
      <input
        id='tier3'
        type='text'
        placeholder='Tier 3 rewards ($15)'
        required
      />

      <input
        type='submit'
        className={styles.createBtn}
        value={"Become a Creator"}
      ></input>
    </form>
  );
};

export default BecomeCreatorForm;
