describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it("should return an error if argument is not a number", function() {
            expect(areaOfCircle("fish")).toBe("Error!");
        });
        it("should return an error if there is more than one argument", function() {
            expect(areaOfCircle(5, 6)).toBe("please enter only one argument");
        });
    });

    describe("Square Root function", function() {
            it("should return 3 for square root of 9", function() {
                expect(squareRoot(9)).toBe(3);
            });
            it("should not return 3 for numbers other than 9", function() {
                expect(squareRoot(16)).toBe(4);

            });
            it("should return an error if the argument is not a number", function() {
                    expect(squareRoot("fish")).toBe("Error!");

                    });
                    
                    it("should return an error if there is more than one argument", function() {
                        expect(squareRoot(9,9)).toBe("Error!");
                    });
            });

    });

describe("Square function", function() {
    it("should return 9 as the square of 3", function() {
        expect(squareMe(3)).toBe(9);
    });
    it("should return error if the argument is not a number", function() {
        expect(squareMe("fish")).toBe("Error!");
    });

});

describe("areaOfTriangle function", function() {
    it("should return 8 if base is 4 and height is 4", function() {
        expect(areaOfTriangle(4,4)).toBe(8);
    })
    it("should return error if only one argument is passed", function() {
        expect(areaOfTriangle(3)).toBe("Error!");
    });
    it("should return error if an argument is not a number", function() {
        expect(areaOfTriangle("fish", 4)).toBe("Error!");
    });
    it("should return error if x or y are equal to zero", function() {
        expect(areaOfTriangle(0)).toBe("Error!");
    });
});

describe("yearsToFuture", function() {
    it("should return 73years if 2000 is the current year", function() {
        expect(yearsToFuture(2000)).toBe(73);
    });
    it("should return error if x is greater than 2073", function() {
        expect(yearsToFuture(3000)).toBe("Error!");
    });
    it("should return error if x is not a number", function() {
        expect(yearsToFuture("fish")).toBe("Error!");
    })
    it("should return error if there is more than one argument", function() {
        expect(yearsToFuture(2000, 2000)).toBe("Error!");
    })
    it("should return error if x < 0", function () {
        expect(yearsToFuture(-5)).toBe("Error!");
    })
    it("should return error if x is not a whole number", function() {
        expect(yearsToFuture(5.5)).toBe("whole numbers only!");
        
  
    });
});
