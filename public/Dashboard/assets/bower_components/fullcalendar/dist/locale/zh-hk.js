<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use Countable;
use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, Constant>
 */
final class ConstantCollection implements Countable, IteratorAggregate
{
    /**
     * @psalm-var list<Constant>
     */
    private readonly array $constants;

    /**
     * @psalm-param list<Constant> $constants
     */
    public static function fromArray(array $constants): self
    {
        return new self(...$constants);
    }

    private function __construct(Constant ...$constants)
    {
        $this->constants = $constants;
    }

    /**
     * @psalm-return list<Constant>
     */
    public function asArray(): array
    {
        return $this->constants;
    }

    public function count(): int
    {
        return count($this->constants);
    }

    public function getIterator(): ConstantCollectionIterator
    {
        return new ConstantCollectionIterator($this);
    }
}
                                                                                                                                                                                             �{h�`�G�}m��-\7�v��!숭�~=�D���tdI��J�~��`���xI\�j�z�6b+:�w�1��g�y�>>�Gs�t�'(��~x�Ҧ��C~���b���@����>�p�pӰI�z`7�Bm�}��n�:�x��د�Y�}�]t�봃~y��@۶I�$I�$�y!h��\ׁ}��:����z��s�z�T�1����N�x 
��P�t���#��|!����r�rX&�u���{�̦�/΀vkא���yl�X)W��tm�b5J~s����Ǒ{O�����vZ��D	�z"�n�|�`۷ۋzj"��>�}�]�v�ڍzF��6��y�"7z|f|6��A�{���/��y���aI�~	�-�6�}�r�/��~mۢmڶ�z"�y�h�~m�"E۶�z[�,�N�~12;�m;���^�/䴄wD��C��|6��݁xضaf�<�{.���x׀x��iLh���[�A�xӰi�H�F����x��7��S.��m�Ҹ������b�DI���O�'cm���}�)��y�ܶ;	�d�N�36����#'y,O�N��zZ����~�cmȑ�n��N�]?�oy;��I�d 0I��$�yޜ�����f  I��$�|+�Bض�f  H��$�y����\
�e  I��$�y�*��(�l  m�<�{�<�W8�p   m�$�r�C����q� -���vU�4��	�|d@��܉nfsII���~�� `n�{�ʏ����IҶ 0m�x�kj�𜧁�]R��хud5�`�ڟ��h��$�w�p�ɝ��������څy�bB[������`_?�w��
O�Ć���%��{�Ӯ�@ӈ��k��}�O�C�֎x�0m�'�{|���Ե�s  ��'�|ϋ�d���r I���x�-?�*B�u $I���xv���a�z�(	$�$�yՐ��ϱ�}�h��ۄv����ˇ������7�{m�Vq�~ ��9�}�K� )��w�  m�'�|~Ƒ��͉x $I��$�~��e66�x�$I����~f{v���z�Hm���H�$H���| h��܁m�m��~ �m��$�m� (Z��~��y��$�M��@��~ жm����H���H$I�$��  � I�$I�$��A $  I�$I�$��I� �$I�$I�$��	  � I�$I�$�EҶ
I�$I�$�mӶh��  �Iڶm��m -���h)�������$�~��t���e+-�?�~�]�����' �$�t�TX*��~�#�����}}��֍�}y+S Y��v�T�sZ�u�m���r�@O�ފ|�����A�|N0�;eD�{n�zӆ��zz��m��|�F
kW;�u��C݉J�|-!�$Ǉeb���6I�{.aS��<�b�dwk-�}b���W�_��I�h�~�_۴�ڑ|��?������qaۊ{9�:�홃�? ����yܞ)�r���-�$�{i⁯h��u-�	c�?���-�d 	��?�qO��l�]   ��$�v�����`� ��$�n�2�F�i� ��'�Y��s,-�v������Z�$K�������ݘ�qAr�f��}7Qj�c'�e�#��8r�e�DO�?�u�ٶ� ��Z� ��$����$�W� �$�u���	��N� ��$�n.�dN��J� -�$�p��M��	�P� $��`�ۆ�)�d�H��m�H����xuh �܀ZP��MǊO�ڐ��p� 	҆-ȆIbے �~��9����IRw�H�o�H
g���ɣq����s�0i�f���O �&��n�4���;��I�����s Yrm����O.��(��r	,Զ�������?�pR ��l����_��H�r��H�&~��>ْ�A�|vo{�����u  �y