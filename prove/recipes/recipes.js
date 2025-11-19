let html = `<article class="recipe-card">
          <img src="images/apple-crisp.jpg" alt="Apple crisp topped with vanilla ice cream">
    
          <div class="recipe-info">
            <span class="tag">dessert</span>
    
            <h2><a class="recipe-link" href="#">Apple Crisp</a></h2>
    
            <!-- Accessible rating -->
            <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
              <span aria-hidden="true">⭐</span>
              <span aria-hidden="true">⭐</span>
              <span aria-hidden="true">⭐</span>
              <span aria-hidden="true">⭐</span>
              <span aria-hidden="true">☆</span>
            </span>
    
            <p id="desc" class="recipe-description">
              This apple crisp recipe is a simple yet delicious fall dessert that’s great served warm with vanilla ice cream.
            </p>
          </div>
        </article>`