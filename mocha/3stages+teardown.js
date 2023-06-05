////SETUP///
//the Setup phase is where objects, variables, and set conditions that tests depend on are created.

////EXERCISE///
//The Exercise phase is where the functionality under test is executed.

////VERIFY///
//the Verify phase is where expectations are checked against the result of the exercise phase. assert would be used here.

////

describe('.pop', () => {
    it('returns the last element in the array [3phase]', () => {
      // Setup
      const knightString = 'knight';
      const jediPath = ['padawan', knightString];
      // Exercise
      const popped = jediPath.pop();
      // Verify
      assert.ok(popped === knightString);
    });
  });

////TEARDOWN (ISOLATE CASE)///
// where the environment is reset before the next test runs.

  it('creates a new file with a string of text', () => {
    // Setup
    path = './message.txt';
    str = '';
   
    // Exercise: write to file
    fs.appendFileSync(path, str);
  
    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.equal(contents.toString(), str);
  
    // Teardown: restore file
    fs.unlinkSync(path);
  });