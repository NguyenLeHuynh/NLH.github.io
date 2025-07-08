/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #f5f5f5;
  color: #333;
}

/* Profile Section */
.main {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.profile-card {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
}

.profile-card .image img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
}

.profile-card h2 {
  font-size: 24px;
  font-weight: 500;
}

.profile-card .data span {
  display: block;
  font-size: 14px;
  color: #777;
  margin-top: 5px;
}

.profile-card .row {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.profile-card .info h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.profile-card .info span {
  font-weight: 600;
  color: #333;
}

.profile-card .buttons {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 8px 20px;
  margin: 0 5px;
  background: #007aff;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
}

.btn:hover {
  background: #005fcc;
}

/* Swiper Slider */
.container {
  max-width: 960px;
  margin: 40px auto;
  padding: 0 20px;
}

.card-wrapper {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 5px 10px;
  background: #007aff;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
}

.card-title {
  padding: 15px;
  font-size: 18px;
}

.card-button {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: #007aff;
  border: none;
  color: #fff;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
}

/* Memory Game Section */
.game-section {
  text-align: center;
  padding: 50px 20px;
  background: #fff;
}

.game-section h1 {
  margin-bottom: 10px;
  font-size: 32px;
}

.game-section p {
  margin-bottom: 30px;
  font-size: 16px;
  color: #555;
}

.wrapper .cards {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.card {
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
}

.view {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.5s;
}

.front-view {
  background: #ddd;
}

.back-view {
  transform: rotateY(180deg);
}

.card.flip .front-view {
  transform: rotateY(180deg);
}

.card.flip .back-view {
  transform: rotateY(360deg);
}
