describe("calculator", function() {
    describe("addition tests", function() {
        it("should return 42", function() {
            expect(add(20, 22)).toBe(42);


        });
        it("should not return 42 for different numbers", function() {
            expect(add(5, 5)).toBe(10);
        });

        it("should return an error if both arguments are not numbers", function() {
            expect(add("fish", 5)).toBe("Error!");
        });
        it("should return an error if one argument is null", function() {
            expect(add(42, null)).toBe("Error!");
        });
    });
    describe("subtraction test", function() {
        it("should return 42", function() {
            expect(sub(84, 42)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(sub(10, 5)).toBe(5);

        });
        // it("should return an error if both arguments are not numbers", function() {
        //     expect(sub(10, "fish")).toBe("Error!");

        // });
        it("should show an alert on error", function() {
            spyOn(window, "alert");
            sub("fish", 42);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    describe("multiplication test", function() {
        it("should return 8", function() {
            expect(mul(2, 4)).toBe(8);
        });
        it("should not return 8 for other numbers", function() {
            expect(mul(3, 3)).toBe(9);
        });
        // it("should return an Error if both arguments are not numbers", function() {
        //     expect(mul(3, "fish")).toBe("Error!");

        // });
        it("should show an alert error", function() {
            spyOn(window, "alert");
            mul("fish", 4);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });

    describe("division test", function() {
        it("should return 5", function() {
            expect(div(25, 5)).toBe(5);
        });

        it("should not return 5 for other numbers", function() {
            expect(div(9, 3)).toBe(3);
        });
        // it("should return an Error if both arguments are not numbers", function() {
            expect(sub(6, "fish")).toBe("Error!");
        // });
        it ("should show an alert error", function() {
            spyOn(window, "alert");
            div("fish", 7);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
