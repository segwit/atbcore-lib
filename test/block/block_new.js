'use strict';

var bitcore = require('../..');
var BufferReader = bitcore.encoding.BufferReader;
var BufferWriter = bitcore.encoding.BufferWriter;
var BlockHeader = bitcore.BlockHeader;
var Block = bitcore.Block;

var blockhex = '0000002032afd0a9392fa22691ba39651c0376d463b734d24470f9c88658df953ef22559b85ef202281f819bca34ad9aa64216dd436a2141c2258e28a0b5ecf3d7dde42fe0e793594c81071e000000004630440220721981587758d12e544c0282930317f398ca7c91f69b5e06ac8bc890c7edbcdc0220420c15ff9762dbbcdc580b3449a104be8c0990fed212e6795661ffef5c627c3501030a7e0aa84dbc6b4ec714139ae9e41261f40ee13f673d4ca27977956a7594eb02000000e0e793590201000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0402d20000ffffffff0100000000000000000000000000e0e793590100000001030a7e0aa84dbc6b4ec714139ae9e41261f40ee13f673d4ca27977956a7594eb0200000049483045022100acefbf18f5a0780dfc90be91257700f56d2f3d98cd76c80f2717314e7b8e256b02207bed064f7ee4e8a7efae7016f8e6f4d2fc68c11e08eee7bdc807215f5fcde25901ffffffff03000000000000000000003d94773801000023210347eb92517df0090cd6d205be25339b4b1ca03671c320ab4ba8af119a27f5a925ac0022a6773801000023210347eb92517df0090cd6d205be25339b4b1ca03671c320ab4ba8af119a27f5a925ac00000000e0e79359';


describe('Block', function() {

    describe('#fromString/#toString', function() {

        it('should output/input a block hex string', function() {
            var b = Block.fromString(blockhex);
            b.toString().should.equal(blockhex);
        });

    });


});