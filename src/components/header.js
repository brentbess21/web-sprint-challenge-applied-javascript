const Header = (title, date, temp) => {

  //create elements
  const headerContainer = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  //create structure
  headerContainer.appendChild(headerDate);
  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerTemp);

  //attach classes
  headerContainer.classList.add("header");
  headerDate.classList.add("date");
  headerTemp.classList.add("temp");


  //pass in content
  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  return headerContainer;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}


const headerAppender = (selector) => {

  const entryPoint = document.querySelector(selector);
  entryPoint.appendChild(Header("Lambda Times", "8/6/2021", "72°"));

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
