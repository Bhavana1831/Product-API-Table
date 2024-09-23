let tablebody = document.getElementById("body");
      let product = async () => {
        let data = await fetch('https://dummyjson.com/products');
        let finaldata = await data.json();
        finaldata.products.forEach(
          ({ id,title, thumbnail, price,description, category,brand }) => {
            tablebody.innerHTML += `
                <td>${id}</td>
                <td>${title}</td>
                <td class="desc">${description}</td>
                <td><img src="${thumbnail}" alt=""></td>
                <td>$ ${price}</td>
                <td>${brand}</td>
                <td>${category}</td>
                `;
          }
        );
      };
      product();