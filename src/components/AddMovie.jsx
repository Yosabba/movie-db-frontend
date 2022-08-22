const AddMovie = () => {
  return (
    <>
      <h1>Add your favorite movie to the database</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </form>
    </>
  );
};

export default AddMovie;
