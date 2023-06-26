



//here we use one useState for everything
function Subject() {
    const [state, setState] = useState({
      currentGrade: 'B',
      classmates: ['Hasan', 'Sam', 'Emma'],
      classDetails: {topic: 'Math', teacher: 'Ms. Barry', room: 201};
      exams: [{unit: 1, score: 91}, {unit: 2, score: 88}]);
    });

//here for each hook a separate state
function Subject() {
    //NOTE:in useState we don't need anymore the name currentGrade: 'B', but just the value 'B'
    const [currentGrade, setGrade] = useState('B');
    const [classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
    const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
    const [exams, setExams] = useState([{unit: 1, score: 91}, {unit: 2, score: 88}]);
    // ...
  }