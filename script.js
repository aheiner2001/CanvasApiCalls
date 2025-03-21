async function getCourses() {
    const courseurl = 'https://cors-anywhere.herokuapp.com/https://byui.instructure.com/api/v1/courses?enrollment_state=active'


    const token = '10706~L6rC4rYCaJZJkTZmRAa9xt6DGTPEMJLhW6TRnyNeUCAf7CQXFGzJPNaUZLJeuHm8';
    
    try {
      const response = await fetch(courseurl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Courses:', data);
      return data;
    } catch (error) {
      console.error('Error fetching courses:', error.message);
      
    }
  }

  async function getGrades(){
    const gradesurl = 'https://cors-anywhere.herokuapp.com/https://byui.instructure.com/api/v1/courses/10706/grades';

    const token = '10706~L6rC4rYCaJZJkTZmRAa9xt6DGTPEMJLhW6TRnyNeUCAf7CQXFGzJPNaUZLJeuHm8';

    try{
        const response = await fetch(gradesurl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok){
            throw new Error(`Error: ${response.status}`);
            
        }
        const data = await response.json();
        console.log('Grades:', data);
        return data;
        } catch (error) {
        console.error('Error fetching courses:', error.message);
        
      }
  };

  
const courses = getCourses();
const grades = getGrades();


async function displayCourses() {
    const courses = await getCourses();
    const coursesList = document.getElementById('courses-list');

    courses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.textContent = `${course.name}` + ` ${course.course_code}`;
        coursesList.appendChild(courseItem);
    });
}

displayCourses();






// async function getData() {
//  
//     // const url = "https://jsonplaceholder.typicode.com/posts";
//     const url ='https://byui.instructure.com/api/v1/courses'
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       return json;
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  


    
// }
// displayData();