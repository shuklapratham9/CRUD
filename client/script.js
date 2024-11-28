const url='http://localhost:3000/college';

document.getElementById('add-alien-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name=document.getElementById('alien-name').value;
    const degreeName=document.getElementById('alien-tech').value;

  
    try {
      const response =await fetch(`${url}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({name,degreeName}),
      });
  
      const data = await response.json();
      document.getElementById('add-alien-response').textContent=`College added:${data.name}`;
    } catch (err) {
      document.getElementById('add-alien-response').textContent='Error adding College.';
    }
  });
  
  // Delete Alien
  document.getElementById('delete-alien-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const id = document.getElementById('delete-alien-id').value;
  
    try {
      const response = await fetch(`${url}/${id}`,{method:'DELETE'});
  
      if (response.ok) {
        document.getElementById('delete-alien-response').textContent = 'College deleted successfully.';
      } else {
        document.getElementById('delete-alien-response').textContent = 'Error deleting college';
      }
    } catch (err) {
      document.getElementById('delete-alien-response').textContent = 'Error deleting college';
    }
  });
  
  // Patch Alien
  document.getElementById('patch-alien-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const id = document.getElementById('patch-alien-id').value;
    const name = document.getElementById('patch-alien-name').value;
    const degreeName = document.getElementById('patch-alien-tech').value;
   
  
    const patchData = {};
    if (name) patchData.name = name;
    if (degreeName) patchData.degreeName = degreeName;
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(patchData),
      });
  
      if (response.ok) {
        const data = await response.json();
        document.getElementById('patch-alien-response').textContent = `College updated`;
      } else {
        document.getElementById('patch-alien-response').textContent = 'Error updating College';
      }
    } catch (err) {
      document.getElementById('patch-alien-response').textContent = 'Error updating College';
    }
  });
  