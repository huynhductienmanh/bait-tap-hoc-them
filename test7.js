// phần tiếp theo hướng dẫn sử dung localStorage 
            // localStorage là 1 bộ nhớ tạm,luu trữ data ở dạng chuỗi va luu tren trang web

            // chỉ cần đưa data vào LOCAL thì qua trang html khác có thể lay ra dung

            // và nó chỉ cho phép luu trữ data o dang CHUỖI nên khi dua array vào phải chuyển sang dang chuỗi trc như sau:

            // vdu dua mang2 ở trên vào thì:
            // console.log(mang2)
            
            // [1,2,3,4,..10]

            // JSON.stringify: CHUYEN SANG CHUỖI
            var xx = JSON.stringify(mang2)

            localStorage.setItem("huynh", xx)

            // nghia la đưa chuỗi xx vao localstorage bang tên demo
            // chạy thử xem nó luu trên web la nằm ở đâu

            // sau khi xem đã có thì thử qua trang khác lấy ra xem