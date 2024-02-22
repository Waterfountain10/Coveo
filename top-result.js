document.addEventListener("DOMContentLoaded", function() {
    // Assuming your results have a common class name 'youtube-result'
    const results = document.querySelectorAll('.youtube-result');
    if (results.length > 0) {
      // This assumes the first result should be marked as 'Top Result'.
      // Adjust the query and logic as necessary.
      results[0].querySelector('.top-result-badge').style.display = 'block';
    }
  });
  