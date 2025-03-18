CREATE DATABASE IF NOT EXISTS student_homes;
USE student_homes;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'guest', 'manager') DEFAULT 'guest',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS apartments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT,
    distance VARCHAR(255),
    rating DECIMAL(3,1),
    reviews INT,
    price VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    apartment_id INT,
    check_in DATE,
    check_out DATE,
    total_price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (apartment_id) REFERENCES apartments(id)
);

-- Sample apartments data
INSERT IGNORE INTO apartments (name, description, image_url, distance, rating, reviews, price) VALUES
('شقة الطالب الأنيقة', 'شقة حديثة ومؤثثة بالكامل مع إطلالة رائعة', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', '5 دقائق', 4.5, 127, '2000 جنيه/شهر'),
('استديو طلابي مميز', 'استديو صغير مريح مع جميع الخدمات الأساسية', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', '10 دقائق', 4.0, 89, '1500 جنيه/شهر'),
('شقة الحرم الجامعي', 'شقة واسعة مثالية للطلاب مع مطبخ مشترك', 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae', '2 دقائق', 4.8, 203, '2500 جنيه/شهر');

-- Sample guest users (using INSERT IGNORE to skip duplicates)
INSERT IGNORE INTO users (name, username, email, password, role) VALUES
('محمد احمد', 'mohamed123', 'mohamed@example.com', '$2b$10$YE1zN6xFsb0jXS3w.YsuXenycCRPrBOuoMGcJhN9HNAOcE76LgSc2', 'guest'),
('سارة محمد', 'sara456', 'sara@example.com', '$2b$10$YE1zN6xFsb0jXS3w.YsuXenycCRPrBOuoMGcJhN9HNAOcE76LgSc2', 'guest'),
('احمد علي', 'ahmed789', 'ahmed@example.com', '$2b$10$YE1zN6xFsb0jXS3w.YsuXenycCRPrBOuoMGcJhN9HNAOcE76LgSc2', 'guest');

-- Sample reservations (using INSERT IGNORE to skip duplicates)
INSERT IGNORE INTO reservations (user_id, apartment_id, check_in, check_out, total_price) VALUES
(5, 1, '2024-03-01', '2024-05-31', 6000.00),  -- محمد's spring semester reservation
(6, 2, '2024-02-15', '2024-06-15', 4500.00),  -- سارة's semester reservation
(7, 3, '2024-03-10', '2024-04-10', 2500.00),  -- احمد's monthly reservation
(5, 2, '2024-06-01', '2024-08-31', 4500.00),  -- محمد's summer reservation
(6, 1, '2024-09-01', '2024-12-31', 8000.00),  -- سارة's fall semester reservation
(7, 3, '2024-05-01', '2024-06-01', 2500.00);  -- احمد's another monthly reservation