/**
 * Created by Yuri on 9/12/2015.
 */

var messageBoard = angular.module('messageBoard', []);

messageBoard.controller('MessageBoardCtrl', function ($scope) {
    $scope.messages = [
        {'id': 1,
            'parent':'root',
            'title': 'Lets make some flood',
            'text': 'Can we speak about something'},
        {'id': 2,
            'parent':1,
            'title': 'Lets make some flood',
            'text': 'Yes, I suggest girls'},
        {'id': 3,
            'parent':1,
            'title': 'Lets make some flood',
            'text': 'Drag is on this Sun usual time'},
        {'id': 4,
            'parent':1,
            'title': 'Lets make some flood',
            'text': 'Aha, on secong Marshall'},
        {'id': 5,
            'parent':'root',
            'title': 'Suggest a moto-service',
            'text': 'I need to change oil, clean a chain, and check overall technical condition'},
        {'id': 6,
            'parent':5,
            'title': 'Suggest a moto-service',
            'text': 'You can try Roma at Stalingrad Heroes Ave'}
    ];
});