class ComponentBase {
    constructor($attrs, $scope) {
        for (var key in $attrs) {
            if (key[0] == "#") {
                var variableName = key.substring(1);
                console.log(variableName);

                $scope.$parent.$ctrl[variableName] = this;
            }
        }
    }
}
